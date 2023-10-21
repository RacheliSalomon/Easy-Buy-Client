import React, { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

import { Calendar } from "primereact/calendar";

import { useFunc } from "../../../Hook/useFunc";
import LastAdd from "./LastAdd";


const Add=(props)=>{
  const[dates,setDates]=useState(null);
  useEffect(()=>{
    if(dates)props.file["start_date"]=dates[0];
    if(dates) props.file["end_date"]=dates[1];
   
  },[dates])
  
  return(
    <div className="flex align-items-center flex-wrap justify-content-between ">
        <div className="flex align-items-center" style={{ width: "30%" }}>
          <img
            alt={props.file.name}
            role="presentation"
            src={props.file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {props.file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>

        <Calendar
          value={dates}
          onChange={(e) => {setDates(e.value)}}
          selectionMode="range"
          readOnlyInput
          showIcon
          style={{ width: "20%" }}
          
        />
        <Tag
          value={props.props.formatSize}
          severity="warning"
          className="px-3 py-2"
          style={{ width: "10%" }}
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger "
          onClick={() => props.onTemplateRemove(props.file, props.props.onRemove)}
        />
      </div>
  )
}



const UploadAdverticment = () => {
  const { postData } = useFunc();

  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);



  const onTemplateSelect = (e) => {
   
    let _totalSize = totalSize;
    let files = e.files;
   
    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;

    });
    setTotalSize(_totalSize);
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };


  const itemTemplate = (file, props) => {
    return (
      <Add file={file} props={props} onTemplateRemove={onTemplateRemove} ></Add>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const uploadHandler = (event) => {
    
    event.files.forEach((file) => {
      postData("advertise", {
        FILE: file.objectURL,
        SHOP_ID: 1,
        START_DATE: file.start_date,
        FINAL_DATE: file.end_date,
      })
        .then(() => {
          setTotalSize(totalSize-file.size)
          toast.current.show({
            severity: "info",
            summary: "Success",
            detail: "File Uploaded",
          });
        })
        .catch((err) =>
          toast.current.show({
            severity: "error",
            summary: "Fail",
            detail: "File Error",
          })
       );
       console.log(file);
    });
  };

  const onTemplateUpload = (e) => {
    // let _totalSize = totalSize;

    // // e.files.forEach((file) => {
    // //     _totalSize
    // // });

    // console.log(e);
    // setTotalSize(_totalSize - e || 0);
    // console.log("lio");
  };

  return (
    <div>
      <Toast ref={toast}></Toast>

      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
      {/* name="demo[]"  */}
      <FileUpload
        ref={fileUploadRef}
        multiple
        accept="image/*"
        // url="http://localhost:2000/advertise"
        maxFileSize={1000000}
        customUpload
        uploadHandler={uploadHandler}
        onUpload={onTemplateUpload}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
      <LastAdd></LastAdd>
    </div>
  );
};

export default UploadAdverticment;
