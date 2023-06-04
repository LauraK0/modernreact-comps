import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5">
          <GoBell />
          Click!
        </Button>
        <Button warning rounded>
          <GoCloudDownload />
          button
        </Button>
        <Button secondary outline>
          <GoDatabase />
          button
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
