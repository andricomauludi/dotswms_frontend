import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  const handleLogout = async () => {
    try {      
      const {data} = await axios.post("/api/auth/logout");
      alert(JSON.stringify(data));
      console.log(data.status)
      if (data.status==404) {
        alert(data.message)
      }else{
        router.push('/')
      }
      //redirect the user to dashboard
    //   router.push('/');
    } catch (e) {
      const error = e as AxiosError;
      console.log(error)
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          key={"5xl"}
          onPress={() => handleOpen("5xl")}
          color="warning"
          variant="bordered"
        >
          Profile
        </Button>
      </div>
      <Modal className="dark text-foreground" size={"5xl"} isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Profile
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
