import { Button, Checkbox, Input } from "antd";
import React from "react";

export default function Todolist() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="border w-[50%] rounded-md px-5 py-6 shadow-sm">
          <h3 className="text-center font-semibold text-[24px]">
            Danh sách công việc
          </h3>

          <div className="flex items-center gap-2 mb-6">
            <Input placeholder="Nhập tên công việc" className="h-10" />
            <Button className="h-10" type="primary">
              Thêm
            </Button>
          </div>

          {/* Danh sách công việc */}
          <ul className="m-0 p-0 flex flex-col gap-3">
            <li className="list-none flex items-center justify-between border p-2 rounded shadow-sm">
              <div className="flex items-center gap-2">
                <Checkbox id="job1" />
                <label htmlFor="job1">
                  <span>Quét nhà</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Button className="bg-orange-500 hover:bg-orange-400">
                  Sửa
                </Button>
                <Button type="primary" danger>
                  Xóa
                </Button>
              </div>
            </li>
            <li className="list-none flex items-center justify-between border p-2 rounded shadow-sm">
              <div className="flex items-center gap-2">
                <Checkbox id="job2" />
                <label htmlFor="job2">
                  <span>Quét nhà</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Button className="bg-orange-500 hover:bg-orange-400">
                  Sửa
                </Button>
                <Button type="primary" danger>
                  Xóa
                </Button>
              </div>
            </li>
            <li className="list-none flex items-center justify-between border p-2 rounded shadow-sm">
              <div className="flex items-center gap-2">
                <Checkbox id="job" />
                <label htmlFor="job">
                  <span>Quét nhà</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Button className="bg-orange-500 hover:bg-orange-400">
                  Sửa
                </Button>
                <Button type="primary" danger>
                  Xóa
                </Button>
              </div>
            </li>
            <li className="list-none flex items-center justify-between border p-2 rounded shadow-sm">
              <div className="flex items-center gap-2">
                <Checkbox id="job" />
                <label htmlFor="job">
                  <span>Quét nhà</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Button className="bg-orange-500 hover:bg-orange-400">
                  Sửa
                </Button>
                <Button type="primary" danger>
                  Xóa
                </Button>
              </div>
            </li>
          </ul>

          {/* Danh dấu hoàn thành công việc */}
          <div className="border p-2 mt-3 rounded shadow-sm">
            <span>Số lượng công việc hoàn thành: </span>
            <b>3</b>
          </div>
        </div>
      </div>
    </>
  );
}
