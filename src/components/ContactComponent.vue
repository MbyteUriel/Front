<template>
<div>
    <h1>Contacto</h1>
    <form name="form" id="form" v-on:submit.prevent="procesar();">
    <p>
        Nombre <input type="text" name="name" placeholder="Nombre" class="form-control" v-model="contacto.nombre"/>      
    </p><div v-if="submited && !$v.contacto.nombre.required">El campo es obligatorio</div>
    <div v-if="submited && !$v.contacto.nombre.minLength">El campo debe tener al menos 2 caracteres</div>
    <p>
        Empresa <input type="text" name="company" placeholder="Empresa" class="form-control" v-model="contacto.empresa"/>
    </p>
    <p>
        Correo <input type="email" name="email" placeholder="Correo" class="form-control" v-model="contacto.email"/>
    </p>
    <p>
        Teléfono <input type="text" name="phone" placeholder="Teléfono" class="form-control" v-model="contacto.telefono"/>
    </p>
    <p>
        Mensaje <textarea name="message" placeholder="Mensaje" class="form-control" v-model="contacto.mensaje"></textarea>
    </p>
    <hr>
    <input type="submit" value="Enviar" title="Enviar" class="btn btn-primary" />
    </form>
</div>
</template>

<script>

import axios from "axios";
export default {
    name: 'ContactComponent',
    data(){
        return{
            contacto:{
                nombre:'',
                empresa:'',
                email:'',
                telefono:'',
                mensaje:'',
            }
        }
    },
    methods:{
        procesar(){
            this.submited = true;
            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }
            let config = {
                headers: {
                    token: Global.token,
                    'Content-Type': 'application/json'
                },
            };
            let parametros = 'nombre='+this.contacto.nombre+'&empresa='+this.contacto.empresa+'&email='+this.contacto.email+'&telefono='+this.contacto.telefono+'&mensaje='+this.contacto.mensaje;
            
            axios
            .post("http://service.coshmex.com:8091/nuevo-contacto" + 'contacto', parametros, config)
            .then()
            .catch();

        }
    },

}
</script>

<style>
</style>
