import React, { useState } from "react";
import { Avatar, Button, Input, Popconfirm, Radio, Row, Select, Space, Table, Typography } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, QuestionCircleOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { UserList } from "../../../../data/models/user_list/user_list";
import useAdminUserListHandler from "../use_admin_user_list_handler";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";
import { useAppDispatch } from "../../../../../../../../core/utils/redux";
import { setFilterUser, setSearchText } from "../../../reducers/user_list_slice";
import { ColumnType } from "antd/lib/table";
import AssetConstants from "../../../../../../../../core/constants/asset_constants";

const { Option } = Select;

function onChange(pagination: any, filters: any, sorter: any, extra: any) {}

type UserListProps = {
  users: UserList[];
};

function UserListTable({ users }: UserListProps) {
  const { isGetUsersLoading, pagination, onChangePage, deleteUser } = useAdminUserListHandler();
  const dispatch = useAppDispatch();
  const [role, setRole] = useState("");
  const handleSearch = (selectedKeys: any, confirm: any) => {
    confirm();
    dispatch(setSearchText(selectedKeys[0]));
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    dispatch(setSearchText(""));
  };
  const columns: ColumnType<UserList>[] = [
    {
      title: "Nama pengguna",
      render: (value: any, record: UserList) => {
        return (
          <Row>
            <Avatar size={50} src={record.profilePicture == null?AssetConstants.imageURL+"placeholder/profile_placeholder.png":record.profilePicture} className="mr-2" />
            <Typography.Text className="my-auto" strong>
              {record.name.length > 14 ? record.name.substring(0, 13) + "..." : record.name}
            </Typography.Text>
          </Row>
        );
      },
      width: 200,
      fixed: "left",
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      },
    },
    {
      title: "Username",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className="custom-filter-dropdown">
          <Input
            placeholder={`Cari Username`}
            className="rounded"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Button className="rounded" type="primary" onClick={() => handleSearch(selectedKeys, confirm)} icon={<SearchOutlined />} size="small" style={{ width: 90, marginRight: 8 }}>
            Search
          </Button>
          <Button className="rounded" onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: (filtered) => <SearchOutlined />,
      render: (value: any, record: any) => {
        return (
          <Row>
            <Typography.Text className="my-auto" strong>
              {record.username}
            </Typography.Text>
          </Row>
        );
      },
      width: 200,
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      },
    },

    {
      title: "Jenis Pengguna",
      dataIndex: "role",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className="custom-filter-dropdown">
          <Radio.Group className="block mb-3" onChange={(e) => setRole(e.target.value)} value={role}>
            <Space direction="vertical">
              <Radio value="illustrator">Illustrator</Radio>
              <Radio value="consumer">Konsumen</Radio>
            </Space>
          </Radio.Group>

          <Button className="rounded" type="primary" onClick={() => dispatch(setFilterUser(role))} icon={<SearchOutlined />} size="small" style={{ width: 90, marginRight: 8 }}>
            Search
          </Button>
          <Button
            className="rounded"
            onClick={() => {
              setRole("");
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
     
    },
    {
      title: "Tanggal dibuat",
      render: (value: any, record: any) => UtilMethods.getIndonesianFormatDate(record.createdAt),

      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => +new Date(a.createdAt) - +new Date(b.createdAt),
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Nomor Telepon",
      dataIndex: "phone",
    },
    {
      title: "Aksi",
      fixed: "right",
      width: 60,
      render: (value, record: UserList) => {
        return (
          <Popconfirm
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            title="Apakah Anda yakin akan menghapus user ini?"
            placement="leftTop"
            onConfirm={(e) => deleteUser({ userId: record.id, role: record.role })}
          >
            <Button type="text" style={{ color: "red" }} icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        loading={isGetUsersLoading}
        pagination={{
          showSizeChanger: false,
          onChange: onChangePage,
          pageSize: pagination?.pageSize,
          total: pagination?.totalData,
          current: pagination?.currentPage,
        }}
        indentSize={10}
        scroll={{ x: 768 }}
        size="middle"
        columns={columns}
        dataSource={users}
      />
    </div>
  );
}

export default UserListTable;
