import React from "react";
import styled from "@emotion/styled";
import { VectorMap } from "@south-paw/react-vector-maps";

// You'll need to download the json file from the docs site or you can create your own.
import * as world from "./world.json";
import * as india from "./india.json";

const MapContainer = styled.div`
  margin: 1rem auto;
  width: 800px;

  svg {
    /* stroke: #fff; */

    // All layers are just path elements
    path {
      fill: #628d45;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: #4ba6d6;
      }

      // When a layer is focused.
      &:focus {
        fill: #4ba6d6;
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked="true"] {
        fill: rgba(56, 43, 168, 1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: rgba(56, 43, 168, 0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="in"] {
        fill: rgba(56, 43, 168, 0.6);
      }
      &[id="cn"] {
        fill: rgba(56, 43, 168, 0.6);
      }
    }
  }
`;

export const Map = () => {
  const [selected, setSelected] = React.useState("");
  const [currentLayer, setCurrentLayer] = React.useState(world);

  // const style = { margin: "1rem auto", width: "800px" };

  const onClick = ({ target }) => {
    const id = target.attributes.id.value;

    // If selected includes the id already, remove it - otherwise add it
    selected.includes(id)
      ? setSelected(selected.filter((sid) => sid !== id))
      : setSelected(id);
  };

  console.log("SELECTED::", selected);

  React.useEffect(() => {
    if (selected) {
      setCurrentLayer(india);
    }
  }, [selected]);

  return (
    <MapContainer>
      <VectorMap {...currentLayer} layerProps={{ onClick }} />
    </MapContainer>
  );
};
