import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,  
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function AddTableProject() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();
  const [imageloader, setImageLoader] = useState();
  const [isLoading, setLoading] = useState(true);
  const [size, setSize] = React.useState("5xl");

  const handleOpen = async (size: any) => {
    setSize(size);
    onOpen();
    // try {
    //   const { data } = await axios.get("/api/users/me");
    //   const profiles: IprofileState[] = await data.data.user;
    //   console.log(profiles);
    //   if (data.status == 404) {
    //     alert(data.message);
    //   }
    // } catch (e) {
    //   const error = e as AxiosError;
    //   console.log(error);
    //   alert(error.message);
    // }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const { data: response } = await axios.get("/api/users/me");
  //       setData(await response.data.user);
  //       setImageLoader(`/img/${await response.data.user.profile_picture}`);
  //     } catch (error: any) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          key={"5xl"}
          onPress={() => handleOpen("5xl")}
          color="warning"
          variant="shadow"
          style={{ margin: "10px" }}
        >
          Add Data
        </Button>
      </div>
      <Modal
        className="dark text-foreground"
        size={"5xl"}
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        isDismissable={false}
        scrollBehavior={"outside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div>
                <ModalHeader className="flex flex-col gap-1">
                  Add Data
                </ModalHeader>
                <ModalBody className="mx-auto my-auto">
                  <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                          <form
                            // onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                          >
                            <Input type="text" label="Item" required />
                            <Input
                              type="text"
                              label="Posting Schedule"
                              required
                            />
                            <Input type="text" label="Posting Time" required />                                                  
                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  variant="bordered"
                                  className="capitalize"
                                >
                                  {selectedValue}
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                              >
                                <DropdownItem key="text">Text</DropdownItem>
                                <DropdownItem key="number">Number</DropdownItem>
                                <DropdownItem key="date">Date</DropdownItem>
                                <DropdownItem key="single_date">
                                  Single Date
                                </DropdownItem>
                                <DropdownItem key="iteration">
                                  Iteration
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  variant="bordered"
                                  className="capitalize"
                                >
                                  {selectedValue}
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                              >
                                <DropdownItem key="text">Text</DropdownItem>
                                <DropdownItem key="number">Number</DropdownItem>
                                <DropdownItem key="date">Date</DropdownItem>
                                <DropdownItem key="single_date">
                                  Single Date
                                </DropdownItem>
                                <DropdownItem key="iteration">
                                  Iteration
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                            <Input type="text" label="Content Text Link" required />                            
                            <Input type="text" label="Content Text" required />                            
                            <Input type="text" label="Content Posting" required />                            
                            <Input type="text" label="Posting Caption" required />     
                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  variant="bordered"
                                  className="capitalize"
                                >
                                  {selectedValue}
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                              >
                                <DropdownItem key="text">Text</DropdownItem>
                                <DropdownItem key="number">Number</DropdownItem>
                                <DropdownItem key="date">Date</DropdownItem>
                                <DropdownItem key="single_date">
                                  Single Date
                                </DropdownItem>
                                <DropdownItem key="iteration">
                                  Iteration
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>                       
                            <Dropdown>
                              <DropdownTrigger>
                                <Button
                                  variant="bordered"
                                  className="capitalize"
                                >
                                  {selectedValue}
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                              >
                                <DropdownItem key="text">Text</DropdownItem>
                                <DropdownItem key="number">Number</DropdownItem>
                                <DropdownItem key="date">Date</DropdownItem>
                                <DropdownItem key="single_date">
                                  Single Date
                                </DropdownItem>
                                <DropdownItem key="iteration">
                                  Iteration
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>                       


                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="password"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Password"
                                id="password"
                                name="password"
                                required
                              />
                            </div>
                            <div className="text-center mt-6">
                              <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                                Sign In
                              </button>
                            </div>
                          </form>
                          <form></form>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                          <div className="w-1/2">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              className="text-blueGray-200"
                            >
                              <small>Forgot password?</small>
                            </a>
                          </div>
                          <div className="w-1/2 text-right">
                            <Link
                              href="/auth/register"
                              className="text-blueGray-200"
                            >
                              <small>Create new account</small>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
