import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns, users } from "./data";
import Link from "next/link";
import axios from "axios";

type User = (typeof users)[0];


const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
  photo: "secondary",
  design: "danger",
  tiktok: "default",
  education: "success",
  reels: "primary",
  posted: "success",
  "on hold": "danger",
  "not yet posted": "default",
  "on preview": "warning",
};

export default function TableContent() {
  const [datas, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "/api/workspaces/tableproject"
        );
        setData(await response.data.tableproject);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "item":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.item}</p> */}
          </div>
        );
      case "postingschedule":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.item}</p> */}
          </div>
        );
      case "postingtime":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.item}</p> */}
          </div>
        );
      case "lead":
        return (
          <User
            avatarProps={{ radius: "lg", src: `/img/${user.avatar}` }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "contentcategory":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.contentcategory]}
            size="lg"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "contenttextlink":
        return (
          <div className="flex flex-col">
            <Link href={cellValue} className="text-bold text-sm">
              {cellValue}
            </Link>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.item}</p> */}
          </div>
        );
      case "contenttext":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.item}</p> */}
          </div>
        );
      case "contentposting":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.item}</p> */}
          </div>
        );
      case "postingcaption":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.item}</p> */}
          </div>
        );
      case "instagrampostingstatus":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.instagrampostingstatus]}
            size="lg"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "tiktokpostingstatus":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.tiktokpostingstatus]}
            size="lg"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "lastupdated":
        return (
          <User
            avatarProps={{ radius: "lg", src: `/img/${user.avatar}` }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>    
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              style={{ width: "100px" }}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
