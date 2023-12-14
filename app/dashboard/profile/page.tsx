import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Chip,
} from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import styles from "./profilePage.module.css";
import { Container } from "react-bootstrap";

interface IprofileState {
  //interface merupakan rangka object yang mau kita masukin dari api
  _id: string;
  full_name: string;
  address: string;
  birthday: string;
  date: string;
  email: string;
  phone: string;
  profile_picture: string;
  role: string;
}

export default function ProfilePage() {
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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/api/users/me");
        setData(await response.data.user);
        setImageLoader(`/img/${await response.data.user.profile_picture}`);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

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
      <Modal
        className="dark text-foreground"
        size={"5xl"}
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div>
                <ModalHeader className="flex flex-col gap-1">
                  Profile
                </ModalHeader>
                <ModalBody className="mx-auto my-auto">
                  <div>
                    <div className={`${styles.centerImage}`}>
                      <Image
                        // src={`/img/${`profile_ico.png`}`}
                        isBlurred
                        src={`/img/${data.profile_picture}`}
                        style={{
                          height: "200px",
                          width: "200px",
                          objectFit: "cover",
                        }}
                        alt="Picture of the author"
                      />
                    </div>
                    <div style={{ margin: "30px" }}>
                      <div className={`${styles.center}`}>
                        <p
                          className={`${styles.nametitle}`}
                          style={{ fontSize: "50px" }}
                        >
                          {data.full_name}
                        </p>
                        <Chip color="warning" variant="bordered" size="lg" className="capitalize">
                          {data.role}
                        </Chip>
                      </div>
                      <Container style={{margin:"30px"}}>
                        <p>{data.address}</p>
                        <p>{data.birthday}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                      </Container>
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
