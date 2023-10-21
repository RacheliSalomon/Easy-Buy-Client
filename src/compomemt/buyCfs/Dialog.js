const Dialog=()=>{
    const [visible, setVisible] = useState(false);
    return(
    <div className="card flex justify-content-center">
        <Button  icon="pi pi-external-link" onClick={() =>{setVisible(true) }  } />
        <Dialog header={<BuyCfs step={0} stepContent={<Details></Details>}></BuyCfs>} visible={visible}  onHide={() => setVisible(false)} className='w-8' >
        </Dialog>
    </div>)
}