///// SELECTORES EN JS

class elementos {

        // pagina login

        login = {
            "txt_usuario": ':nth-child(3) > .input-group > .form-control',
            "txt_clave": ':nth-child(4) > .input-group > .form-control',
            "btn_ingresar": '.col-4 > .btn'

        
    }
        // pagina principal

        logout = {
                "btn_usuario": '.nav-link > .fa',
                "btn_logout":'[routerlink="/logout"]'
    
        }
  


        // NUEVA ORDEN DE TRABAJO Y NOMINACION PROFUM

        otfug = {
                        // nueva OT
                        "btn_nueva_ot": 'div.col-md-2 > button',
                        "slc_bq":'/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[2]/div[2]/div/div/app-input-select/div/div/ng-select/div/div/div[2]',
                        "slc_ra": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[2]/div[3]/app-input-select/div/div/ng-select/div/div/div[2]',
                        "slc_estado_serv": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[2]/div[5]/app-input-select/div/div/ng-select/div/div/div[2]/input',
                        "btn_guardar_ot": 'body > app-layout-main > div > main > div > app-new-order > div > div.card-body > form > div.pl-2.mr-4.mb-4.ng-star-inserted > button.btn.btn-primary.mr-2',
                        
                        // nueva nominacion
                        "btn_nueva_nom": '#ngb-nav-0-panel > app-nomination-list > div > div > button',
                        "slc_mercaderia": '#Mercaderí­a > div > div > div.ng-input > input[type=text]',
                        "slc_tn_a_tratar": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[1]/div[3]/app-input-text-append-label/div/div/input',
                        "txt_dosis_trabajo": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[1]/div[4]/app-input-text/div/div/input',
                        "slc_unidad": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[1]/div[5]/app-input-select/div/div/ng-select/div/div/div[2]/input',
                        "slc_origen": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[2]/div[1]/app-input-select/div/div/ng-select/div/div/div[2]/input',
                        "slc_destino": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[2]/div[3]/app-input-select/div/div/ng-select/div/div/div[2]/input',
                        "slc_puerto_carga": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[3]/div[1]/app-input-select/div/div/ng-select/div/div/div[2]/input',
                        "txt_a_cargar": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[3]/div[3]/app-input-text-append-label/div/div/input',
                        "btn_agregar": ':nth-child(3) > :nth-child(4) > .btn > .fas',
                        "slc_puerto_tratamiento": '/html/body/app-layout-main/div/main/div/app-new-order/div/div[2]/form/div[4]/div[1]/app-nomination-list/div[2]/div/div/div[2]/div[5]/div[1]/app-input-select/div/div/ng-select/div/div/div[2]/input',
                        "btn_guardar_nom": '.card-footer > .btn-primary',
                        
                        
                }
 


}

module.exports = new elementos ();