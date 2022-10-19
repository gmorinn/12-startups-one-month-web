const Loader = () => {
    return (
       <div style={{position:'fixed', top: '50%', left: '50%', transform: "translate(-50%, -50%)"}}>
            <div className="w-8 h-8 border-b-2 border-indigo-500/100 rounded-full animate-spin mx-auto"/>
        </div>
    )
}

export default Loader