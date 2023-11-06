import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../Components/UI/Container";
import { FaComputer } from "react-icons/fa6";
import { SiMarketo } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import WebDevelopment from "./WebDevelopment";

const CategoryTabs = () => {
  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>
            <div className="flex items-center">
              <FaComputer className="text-xl" />
              <p className="ml-2 text-xl font-medium"> Web Development</p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center">
              <SiMarketo className="text-xl" />
              <p className="ml-2 text-xl font-medium">Digital Marketing</p>
            </div>
          </Tab>
          <Tab>
            <div className="flex items-center">
              <MdDesignServices className="text-xl" />
              <p className="ml-2 text-xl font-medium">Graphics Designs</p>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            <WebDevelopment></WebDevelopment>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default CategoryTabs;
