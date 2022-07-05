<template>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">CONTACTANOS</h5>
        </div>
        <div class="modal-body">
            <form role="form" id="coshmex-form"  method="POST">
                <div class="form-group">
                    <label class="control-label" for="Nombre">Nombres</label>
                    <input type="text" class="form-control" id="nombreCliente" name="nombreCliente" placeholder="Introduzca su nombre" required autofocus />
                </div>            
                <div class="form-group">
                    <label class="control-label" for="Motivo">Área de Interes</label>
                    <select name="Motivo" id="Motivo" class="form-control">
                        <option value="consulting">Consultoría</option>
                        <option value="development">Desarrollo de Software</option>
                        <option value="trainin">Capacitación</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="control-label" for="Empresa">Empresa</label>
                    <input type="text" class="form-control" id="Empresa" name="Empresa" placeholder="Introduzca el nombre de su empresa" required />
                </div>
                <div class="form-group">
                    <label class="control-label" for="Correo">Dirección de Correo Electrónico</label>
                    <input type="email" class="form-control" id="Correo" name="Correo" placeholder="Introduzca su correo electrónico" required />
                </div>
                <div class="form-group">
                    <label class="control-label" for="Telefono">Teléfono</label>
                    <input type="phone" class="form-control" id="Telefono" name="Telefono" placeholder="Introduzca su correo electrónico" required />
                </div>
                <div class="form-group">
                    <label class="control-label" for="Mensaje">Mensaje</label>
                    <textarea rows="5" cols="30" class="form-control" id="Mensaje" name="Mensaje" placeholder="Introduzca su mensaje" required ></textarea>
                </div>
               
                <div id="respuesta" style="display: none;"></div>
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Quiero usar whatsapp</button>
          <button type="button" id="BtnSend"  class="btn btn-primary">Me quiero registrar!  </button>
        </div>
      </div>
  </div>

</template>

<script setup>

</script>

<style scoped>

.modal-dialog {
    max-width: 800px;
    margin: 30px auto;
}
.modal-content {
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid black;
}
.modal-body {
    padding: 15px;
    font-size: 18px;
}
.form-group {
    margin-bottom: 10px;
}
.form-control {
    border-radius: 0;
    width: 100%;
    display: inline-block;
    height: auto;
    padding: 10px;
    font-size: 18px;
    line-height: 1.5em;
    border: 1px solid #ccc;
} 
.control-label {
    font-size: 18px;
}

.btn-primary {
    font-weight: bold;
    border: 1px solid black;
    margin:0px 0px 0px 5px;
    padding:14px;
}
.btn-secondary {
    font-weight: bold;
    border: 1px solid black;
    margin:0px 0px 0px 5px;
    padding:14px;
}

.modal-footer {
    padding: 15px;
}


</style>