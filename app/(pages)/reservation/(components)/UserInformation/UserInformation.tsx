import { Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

interface UserInformationProps {
  email: string;
  phoneNumber: string;
  name: string;
  handleInputChange: Function;
}

const UserInformation = ({
  email,
  phoneNumber,
  name,
  handleInputChange,
}: UserInformationProps) => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Correo electrónico" />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="name@flowbite.com"
          required
          value={email}
          onChange={(event) => {
            handleInputChange("email", event.target.value);
          }}
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
          value={phoneNumber}
          onChange={(event) => {
            handleInputChange("phoneNumber", event.target.value);
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Nombre" />
        </div>
        <TextInput
          id="name"
          name="name"
          type="text"
          placeholder="Carlos Quesada"
          required
          value={name}
          onChange={(event) => {
            handleInputChange("name", event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default UserInformation;
