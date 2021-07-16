/**
 * Este componente es el input de algun formulario
 * @param {object} estado
 * @param {function} cambiarEstado Cambia el estado del input
 * @param {string} name Titulo del formulario
 * @param {string} type Tipo de Input
 * @param {string} error Mensaje de error
 * @param {object} expresionRegular Tipo de expresion regular
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { Input } from '../atoms/Input';
import { LabelInput } from '../atoms/LabelInput';
import { TituloError } from '../atoms/TituloError';

export const InputFormulario = ({
  estado,
  cambiarEstado,
  name,
  type,
  error,
  expresionRegular,
}) => {

  return (
    <ContenedorInput>
      <LabelInput
        color={estado.valido}
        name={name}
      />

      <Input
        estado={estado}
        cambiarEstado={cambiarEstado}
        name={name}
        type={type}
        valido={estado.valido}
        expresionRegular={expresionRegular}
      />

      <TituloError valido={estado.valido}
        error={error}
      />
    </ContenedorInput>
  );
};

const ContenedorInput = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  //margin-bottom: 10px;

  ${props => props.signup && css`
    display: block;
    background-color: red;
  ` }
`;