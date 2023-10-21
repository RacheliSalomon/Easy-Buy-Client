import React, { useState, useEffect, useRef, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { useFunc } from "../../Hook/useFunc";
import { Chip } from "primereact/chip";
import { DataView } from "primereact/dataview";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility
import "./index.css";
import "./flags.css";

import UserContext from "../signin/user/UserContext";
import ShopContext from './shop/ShopContext'
import MoreDetails from "./MoreDetails";

const RecieptContainer = (props) => {
  const { getData } = useFunc();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const [expandedRows, setExpandedRows] = useState(null);

  const currentUser = useContext(UserContext);
  const currentShop=useContext(ShopContext);


  const toast = useRef(null);

   useEffect(() => {
  //   ProductService.getProductsWithOrdersSmall().then((data) =>
  //     setProducts(data)
  //   );

   console.log(props);
   console.log("here");
    getData("reciept/customer/", currentUser.ID, `?id=${currentShop.data.ID}&type=${props.type}`).then((data) =>
      setProduct(data.data)

    );
  },[currentShop]);



  const onRowExpand = (event) => {
    //rowExpansionTemplate(event.data.details)
  };

  const onRowCollapse = (event) => {
    toast.current.show({
      severity: "success",
      summary: "Product Collapsed",
      detail: event.data.name,
      life: 3000,
    });
  };

  const expandAll = () => {
    let _expandedRows = {};

    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const formatCurrency = (value) => {
    // return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const amountBodyTemplate = (rowData) => {
    return rowData.purchase.SUM;
  };

  const statusOrderBodyTemplate = (rowData) => {
    return <></>;
    //  <Tag value={rowData.purchase.DESCRIOTION.toLowerCase()} severity={getOrderSeverity(rowData)}></Tag>;
  };

  const searchBodyTemplate = (rowData) => {
    return rowData.DESCRIPTION;
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`}
        alt={rowData.image}
        width="64px"
        className="shadow-4"
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return (
      <Chip
        label={rowData.purchase.SUM_FOR_PAYMENT}
        icon="pi pi-dollar"
        className="bg-yellow-400 text-0 h-2"
      />
    );
  };

  const ratingBodyTemplate = (rowData) => {
    return rowData.purchase.DATE.split("T")[0];
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.purchase.MEANS_OF_PAYMENT.toUpperCase()}
        severity={getProductSeverity(rowData)}
      ></Tag>
    );
  };

  const getProductSeverity = (product) => {
    switch (product.purchase.MEANS_OF_PAYMENT.toLowerCase()) {
      case "cash":
        return "success";

      case "creit":
        return "warn";

      default:
        return "info";
    }
  };

  const getOrderSeverity = (order) => {
    switch (order.purchase.MEANS_OF_PAYMENT.toLowerCase()) {
      case "cash":
        return "success";

      case "creit":
        return "info";

      default:
        return "warn";
    }
  };

  const allowExpansion = (rowData) => {
    return rowData.details.length > 0;
  };

  const rowExpansionTemplate = (data) => {

    return (

       <MoreDetails data={data.details}></MoreDetails>

    );
  };

  const header = (
    <div className="flex flex-wrap gap-5 align-items-center">
      <img
        alt="shop"
        src={currentShop.data.IMAGE}
        className="shadow-3"
        style={{ width: "100px" }}
      />
      <h2>{currentShop.data.SHOP_NAME}</h2>
    </div>
  );

  return (
    <div >
      <Toast ref={toast} />
      <DataTable
        value={product}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey={product.ID}
        header={header}
        tableStyle={{ minWidth: "60rem" }}
      >
        {/* <Column field="ID"   /> */}
        {/* <Column header="Image" body={imageBodyTemplate} /> */}
        <Column
          header="Total Sum"
          field="SUM_FOR_PAYMENT"
          body={priceBodyTemplate}
          sortable

        />
        {/* <Column field="category" header="Category" sortable /> */}
        <Column header="Date" field="DATE" body={ratingBodyTemplate} sortable />
        <Column header="Payment" body={statusBodyTemplate} sortable />
        <Column expander={allowExpansion} style={{ width: "5rem" }} />
      </DataTable>
    </div>
  );
};
export default RecieptContainer;
