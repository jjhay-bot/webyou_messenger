import { ScreenContainer } from "../../App";
import LocalForageExample from "./fbm/LocalForageExample";

const LvhScreen = () => {

  return (
    <ScreenContainer
      sx={{ bgcolor: "#f0f0" }}
      className="red"
      vh="100lvh"
      // header={false}
      // footer={false}
      // content={"content"}
    >
      <LocalForageExample />
      {/* <Stack sx={{ minHeight: "1000px" }} px={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia temporibus voluptatibus illo
        accusantium ea ad iste! Dolorum asperiores odit eius, illo sequi culpa, perferendis omnis,
        voluptate fugiat sapiente totam quos.
        <Stack pt={8} sx={{ color: "#666" }}>
          {window?.navigator?.userAgent}
        </Stack>
      </Stack> */}
      {/* <Stack sx={{ bgcolor: "yellow" }}>end</Stack> */}
    </ScreenContainer>
  );
};

export default LvhScreen;
