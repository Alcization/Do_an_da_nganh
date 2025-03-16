// import React, { useState } from 'react';
// import styles from './devices.module.css';

// const initialDevices = [
//   { id: 1, name: 'Sensor nhiệt độ', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: 'Nhà kính 1', status: 'on' },
//   { id: 2, name: 'Sensor độ ẩm không khí', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: 'Nhà kính 2', status: 'off' },
//   { id: 3, name: 'Sensor độ ẩm đất', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: 'Không có', status: 'on' },
//   { id: 4, name: 'Sensor ánh sáng', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: 'Nhà kính 1', status: 'on' },
//   { id: 5, name: 'Máy bơm', type: 'Thiết bị đầu ra', code: 'DHT20', greenhouse: 'Nhà kính 2', status: 'off' },
//   { id: 6, name: 'Đèn', type: 'Thiết bị đầu ra', code: 'DHT20', greenhouse: 'Không có', status: 'on' },
//   { id: 7, name: 'Màn hình', type: 'Thiết bị đầu ra', code: 'DHT20', greenhouse: 'Nhà kính 1', status: 'off' }
// ];

// function Devices() {
//   const [devices, setDevices] = useState(initialDevices);
//   const [addingNew, setAddingNew] = useState(false);
//   const [newDeviceData, setNewDeviceData] = useState({
//     name: '',
//     type: 'Thiết bị đầu vào',
//     code: 'DHT20',
//     greenhouse: 'Không có',
//     status: 'on'
//   });

//   // Toggle trạng thái thiết bị
//   const handleToggleStatus = (id) => {
//     setDevices((prev) =>
//       prev.map((device) =>
//         device.id === id ? { ...device, status: device.status === 'on' ? 'off' : 'on' } : device
//       )
//     );
//   };

//   // Xử lý thay đổi input trong modal thêm thiết bị mới
//   const handleNewDeviceChange = (e) => {
//     const { name, value } = e.target;
//     setNewDeviceData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Lưu thiết bị mới vào danh sách
//   const handleSaveNewDevice = () => {
//     const newDevice = {
//       ...newDeviceData,
//       id: Date.now()
//     };
//     setDevices((prev) => [...prev, newDevice]);
//     setNewDeviceData({
//       name: '',
//       type: 'Thiết bị đầu vào',
//       code: 'DHT20',
//       greenhouse: 'Không có',
//       status: 'on'
//     });
//     setAddingNew(false);
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Quản Lý Thiết Bị</h1>
//       <button className={styles.addButton} onClick={() => setAddingNew(true)}>
//         Thêm Thiết Bị Mới
//       </button>

//       <table className={styles.deviceTable}>
//         <thead>
//           <tr>
//             <th>Tên thiết bị</th>
//             <th>Loại thiết bị</th>
//             <th>Mã thiết bị</th>
//             <th>Nhà kính</th>
//             <th>Trạng thái</th>
//             <th>Hành động</th>
//           </tr>
//         </thead>
//         <tbody>
//           {devices.map((device) => (
//             <tr key={device.id}>
//               <td>{device.name}</td>
//               <td>{device.type}</td>
//               <td>{device.code}</td>
//               <td>{device.greenhouse}</td>
//               <td className={device.status === 'on' ? styles.statusOn : styles.statusOff}>
//                 {device.status === 'on' ? 'Bật' : 'Tắt'}
//               </td>
//               <td>
//                 <button className={styles.toggleButton} onClick={() => handleToggleStatus(device.id)}>
//                   {device.status === 'on' ? 'Tắt' : 'Bật'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>


//     </div>
//   );
// }

// export default Devices;


import React, { useState } from 'react';
import styles from './devices.module.css';

const initialDevices = [
  { id: 1, name: 'Sensor nhiệt độ', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: 'Nhà kính 1', status: 'on' },
  { id: 2, name: 'Sensor độ ẩm không khí', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: 'Nhà kính 2', status: 'off' },
  { id: 3, name: 'Sensor độ ẩm đất', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: '', status: 'on' },
  { id: 4, name: 'Sensor ánh sáng', type: 'Thiết bị đầu vào', code: 'DHT20', greenhouse: '', status: 'on' },
  { id: 5, name: 'Máy bơm', type: 'Thiết bị đầu ra', code: 'DHT20', greenhouse: 'Nhà kính 2', status: 'off' },
  { id: 6, name: 'Đèn', type: 'Thiết bị đầu ra', code: 'DHT20', greenhouse: '', status: 'on' },
  { id: 7, name: 'Màn hình', type: 'Thiết bị đầu ra', code: 'DHT20', greenhouse: '', status: 'off' }
];

function Devices() {
  const [devices, setDevices] = useState(initialDevices);
  const [addingNew, setAddingNew] = useState(false);
  const [deletingDevice, setDeletingDevice] = useState(null);
  const [newDeviceData, setNewDeviceData] = useState({
    name: '',
    type: 'Thiết bị đầu vào',
    code: 'DHT20',
    greenhouse: '',
    status: 'on'
  });

  // Toggle trạng thái thiết bị
  const handleToggleStatus = (id) => {
    setDevices((prev) =>
      prev.map((device) =>
        device.id === id ? { ...device, status: device.status === 'on' ? 'off' : 'on' } : device
      )
    );
  };

  // Xử lý thay đổi input trong modal thêm thiết bị mới
  const handleNewDeviceChange = (e) => {
    const { name, value } = e.target;
    setNewDeviceData((prev) => ({ ...prev, [name]: value }));
  };

  // Lưu thiết bị mới vào danh sách
  const handleSaveNewDevice = () => {
    const newDevice = {
      ...newDeviceData,
      id: Date.now()
    };
    setDevices((prev) => [...prev, newDevice]);
    setNewDeviceData({
      name: '',
      type: 'Thiết bị đầu vào',
      code: 'DHT20',
      greenhouse: 'Không có',
      status: 'on'
    });
    setAddingNew(false);
  };

  // Xử lý mở hộp thoại xóa thiết bị
  const handleDeleteClick = (device) => {
    if (device.greenhouse) {
      alert('Không thể xóa thiết bị đang nằm trong một nhà kính!');
      return;
    }
    setDeletingDevice(device);
  };

  // Xử lý xác nhận xóa thiết bị
  const handleConfirmDelete = () => {
    setDevices((prev) => prev.filter((device) => device.id !== deletingDevice.id));
    setDeletingDevice(null);
  };

  return (
    <div className={styles.container}>
      <h1>Quản Lý Thiết Bị</h1>
      <button className={styles.addButton} onClick={() => setAddingNew(true)}>
        Thêm Thiết Bị Mới
      </button>

      <table className={styles.deviceTable}>
        <thead>
          <tr>
            <th>Tên thiết bị</th>
            <th>Loại thiết bị</th>
            <th>Mã thiết bị</th>
            <th>Nhà kính</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>{device.name}</td>
              <td>{device.type}</td>
              <td>{device.code}</td>
              <td>{device.greenhouse || 'Không có'}</td>
              <td className={device.status === 'on' ? styles.statusOn : styles.statusOff}>
                {device.status === 'on' ? 'Bật' : 'Tắt'}
              </td>
              <td>
                <button className={styles.toggleButton} onClick={() => handleToggleStatus(device.id)}>
                  {device.status === 'on' ? 'Tắt' : 'Bật'}
                </button>
                <button className={styles.deleteButton} onClick={() => handleDeleteClick(device)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Xác nhận xóa thiết bị */}
      {deletingDevice && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Xác nhận xóa thiết bị</h2>
            <p>Bạn có chắc chắn muốn xóa thiết bị "{deletingDevice.name}" không?</p>
            <div className={styles.modalActions}>
              <button className={styles.deleteButton} onClick={handleConfirmDelete}>
                Xóa
              </button>
              <button className={styles.cancelButton} onClick={() => setDeletingDevice(null)}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal Thêm thiết bị mới */}
      {addingNew && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Thêm Thiết Bị Mới</h2>
            <input
              className={styles.modalInput}
              type="text"
              name="name"
              placeholder="Tên thiết bị"
              value={newDeviceData.name}
              onChange={handleNewDeviceChange}
            />
            <select
              className={styles.modalInput}
              name="type"
              value={newDeviceData.type}
              onChange={handleNewDeviceChange}
            >
              <option value="Thiết bị đầu vào">Thiết bị đầu vào</option>
              <option value="Thiết bị đầu ra">Thiết bị đầu ra</option>
            </select>
            <input
              className={styles.modalInput}
              type="text"
              name="code"
              placeholder="Mã thiết bị"
              value={newDeviceData.code}
              onChange={handleNewDeviceChange}
            />
            <select
              className={styles.modalInput}
              name="greenhouse"
              value={newDeviceData.greenhouse}
              onChange={handleNewDeviceChange}
            >
              <option value="Nhà kính 1">Nhà kính 1</option>
              <option value="Nhà kính 2">Nhà kính 2</option>
              <option value="Không có">Không có</option>
            </select>
            <div className={styles.modalActions}>
              <button className={styles.addButton} onClick={handleSaveNewDevice}>
                Lưu
              </button>
              <button className={styles.deleteButton} onClick={() => setAddingNew(false)}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Devices;
