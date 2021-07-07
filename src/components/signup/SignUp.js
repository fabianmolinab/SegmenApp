import React, { useState } from 'react';

import { GlobalStyle }     from '../../styles/GlobalStyle';
import { ContendorGlobal } from '../../styles/LoginStyles';
import { InputFormulario } from '../ui/InputFormulario';
import { expresiones }     from '../../data/expresionesRegulares';
import {
  ContenedorName,
  ContenedorSignup,
  RegistroEnviado,
}                          from '../../styles/SignUpStyles';
import { Botton }          from '../ui/Botton';
import InputCheckbox       from '../ui/InputCheckbox';

export const SignUp = () => {
  const [nombre, cambiarNombre] = useState( {
    campo: '', valido: null,
  } );

  const [correo1, cambiarCorreo1] = useState( {
    campo: '', valido: null,
  } );

  const [correo2, cambiarCorreo2] = useState( {
    campo: '', valido: null,
  } );

  const [password1, cambiarPassword1] = useState( {
    campo: '', valido: null,
  } );

  const [password2, cambiarPassword2] = useState( {
    campo: '', valido: null,
  } );

  //Checked de Terminos y Condiciones
  const [terminos, cambiarTerminos] = useState( { checked: false } );

  //Estado para mostrar o no aviso el envio del formulario
  const [mensajeConfirmacion, cambiarMensajeConfirmacion] = useState( {
    correcto: 'false', fallido: 'false',
  } );

  //Validaciones de todos los campos del formulario
  const handleLogin = ( e ) => {
    e.preventDefault();

    //Validaciones de los campos de correo y contraseña sean iguales

    if ( nombre.valido === 'true' && correo1.valido === 'true' &&
        correo2.valido === 'true' && password1.valido === 'true' &&
        password2.valido === 'true' && terminos.checked === true ) {

      if ( correo1.campo === correo2.campo && password1.campo ===
          password2.campo ) {

        cambiarMensajeConfirmacion( {
          correcto: 'true', fallido: 'false',
        } );

        console.log( 'mensaje bien' );
        console.log( mensajeConfirmacion );

      } else {
        cambiarMensajeConfirmacion( {
          correcto: 'false', fallido: 'true',
        } );
        console.log( 'mensaje mal 2grado' );
        console.log( mensajeConfirmacion );
      }
    } else {
      cambiarMensajeConfirmacion( {
        correcto: 'false', fallido: 'true',
      } );
      console.log( 'mensaje mal 1grado' );
      console.log( mensajeConfirmacion );
    }
  };

  return (
      <>
        <GlobalStyle/>

        <ContendorGlobal signup>

          <ContenedorSignup onSubmit={ handleLogin }>

            <ContenedorName>
              <InputFormulario estado={ nombre }
                               cambiarEstado={ cambiarNombre }
                               name="Nombre de Usuario"
                               type="text"
                               error="Tienes un error con el nombre de usuario"
                               placeholder="Su nombre de usuario"
                               expresionRegular={ expresiones.nombre }
              />
            </ContenedorName>

            <InputFormulario estado={ correo1 }
                             cambiarEstado={ cambiarCorreo1 }
                             name="Correo Electronico"
                             type="text"
                             error="Tienes un error en el correo"
                             placeholder="correo@domino.com"
                             expresionRegular={ expresiones.correo }
            />

            <InputFormulario estado={ correo2 }
                             cambiarEstado={ cambiarCorreo2 }
                             name="Confirma tu correo electronico"
                             type="text"
                             error="Tienes un error en el correo"
                             placeholder="correo@domino.com"
                             expresionRegular={ expresiones.correo }
            />

            <InputFormulario estado={ password1 }
                             cambiarEstado={ cambiarPassword1 }
                             name="Contraseña"
                             type="password"
                             error="Tienes un error en la contraseña"
                             placeholder="Contraseña"
                             expresionRegular={ expresiones.password }
            />

            <InputFormulario estado={ password2 }
                             cambiarEstado={ cambiarPassword2 }
                             name="Confirma tu Contraseña"
                             type="password"
                             error="Tienes un error en la contraseña"
                             placeholder="Contraseña"
                             expresionRegular={ expresiones.password }
            />
            <Botton type="submit">Crear Cuenta</Botton>
          </ContenedorSignup>

          <div>
            <InputCheckbox estado={ terminos }
                           cambiarEstado={ cambiarTerminos }
                           name="condiciones"
            />
            <label>Esta de acuerdo con la politica de <a>Terminos
              y condiciones</a>
            </label>
          </div>


          <div>
            {
              ( mensajeConfirmacion.correcto === 'true' &&
                  mensajeConfirmacion.fallido === 'false' )
                  ?
                  <RegistroEnviado mensaje={ mensajeConfirmacion.correcto }>
                    Un mensaje fue enviado a su email para confirmar el registro
                  </RegistroEnviado>
                  : ( mensajeConfirmacion.correcto === 'false' &&
                  mensajeConfirmacion.fallido === 'true' )
                  ?
                  <RegistroEnviado mensaje={ mensajeConfirmacion.fallido }>
                    Le falto alguno de los cambios
                  </RegistroEnviado>
                  :
                  <RegistroEnviado mensaje={ mensajeConfirmacion.fallido }/>

            }
          </div>

          <p>¿Ya tienes una cuenta? <a>Inicia Sección</a></p>


        </ContendorGlobal>
      </>
  )
      ;
};
