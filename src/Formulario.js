function Formulario() {
    return(
        <div className="app">
            <div class="container-search">
                <form class="row g-3 mb-5">
                    <div class="row">
                        <div class="col-4">
                            <label>Data de início:</label>
                            <input type='date' name="startDate" class="form-control"  id="startDate" />
                        </div>
                        <div class="col-4">
                            <label>Data de fim:</label>
                            <input type='date' name="endDate" class="form-control" id="endDate" />
                        </div>
                        <div class="col-4">
                            <label>Nome operador</label>
                            <input name="nameOperator" class="form-control"  id="nameOperator" />
                        </div>
                    </div>
                    <div class="row2">
                        <div class="col-sm-4">
                            <input type="button" id="search" className="btn btn-primary" value="Pesquisar" />
                        </div>
                    </div>                    
                </form>
                
            </div>
        </div>
    )
}

export default Formulario;