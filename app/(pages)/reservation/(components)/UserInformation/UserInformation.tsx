import { Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

const UserInformation = () => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Correo electrónico" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneNumber" value="Número de teléfono" />
        </div>
        <TextInput
          id="phoneNumber"
          type="text"
          placeholder="88888888"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Nombre" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Carlos Quesada"
          required
        />
      </div>
    </>
  );
};

export default UserInformation;
