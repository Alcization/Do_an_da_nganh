import React, { useState } from 'react';
import styles from './setting.module.css';

const initialUsers = [
  { id: 1, name: 'Nguyễn Văn A', role: 'Quản lý', hiredDate: '2023-01-15', phone: '0987654321', email: 'nguyenvana@example.com' },
  { id: 2, name: 'Trần Thị B', role: 'Công nhân', hiredDate: '2022-05-20', phone: '0912345678', email: 'tranthib@example.com' },
  { id: 3, name: 'Lê Văn C', role: 'Công nhân', hiredDate: '2021-11-10', phone: '0909876543', email: 'levanc@example.com' }
];

function Setting() {
  const [users, setUsers] = useState(initialUsers);
  const [addingNew, setAddingNew] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newUserData, setNewUserData] = useState({
    name: '',
    role: 'Công nhân',
    hiredDate: '',
    phone: '',
    email: ''
  });

  // Xử lý thay đổi input khi thêm user
  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Lưu user mới
  const handleSaveNewUser = () => {
    const newUser = {
      ...newUserData,
      id: Date.now()
    };
    setUsers((prev) => [...prev, newUser]);
    setNewUserData({ name: '', role: 'Công nhân', hiredDate: '', phone: '', email: '' });
    setAddingNew(false);
  };

  // Xử lý mở modal xác nhận xóa user
  const handleDeleteClick = (user) => {
    setDeletingUser(user);
  };

  // Xóa user
  const handleConfirmDelete = () => {
    setUsers((prev) => prev.filter((user) => user.id !== deletingUser.id));
    setDeletingUser(null);
  };

  // Lọc người dùng theo tên (không phân biệt hoa thường)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Quản Lý Người Dùng</h1>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Tìm kiếm theo tên"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.addButton} onClick={() => setAddingNew(true)}>
          Thêm Người Dùng
        </button>
      </div>

      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Vị trí</th>
            <th>Ngày thuê</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.hiredDate}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button className={styles.deleteButton} onClick={() => handleDeleteClick(user)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Thêm người dùng */}
      {addingNew && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Thêm Người Dùng</h2>
            <input
              className={styles.modalInput}
              type="text"
              name="name"
              placeholder="Tên người dùng"
              value={newUserData.name}
              onChange={handleNewUserChange}
            />
            <select
              className={styles.modalInput}
              name="role"
              value={newUserData.role}
              onChange={handleNewUserChange}
            >
              <option value="Quản lý">Quản lý</option>
              <option value="Công nhân">Công nhân</option>
            </select>
            <input
              className={styles.modalInput}
              type="date"
              name="hiredDate"
              value={newUserData.hiredDate}
              onChange={handleNewUserChange}
            />
            <input
              className={styles.modalInput}
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={newUserData.phone}
              onChange={handleNewUserChange}
            />
            <input
              className={styles.modalInput}
              type="email"
              name="email"
              placeholder="Email"
              value={newUserData.email}
              onChange={handleNewUserChange}
            />
            <div className={styles.modalActions}>
              <button className={styles.addButton} onClick={handleSaveNewUser}>
                Lưu
              </button>
              <button className={styles.cancelButton} onClick={() => setAddingNew(false)}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Xác nhận xóa user */}
      {deletingUser && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Xác nhận xóa</h2>
            <p>Bạn có chắc chắn muốn xóa người dùng "{deletingUser.name}" không?</p>
            <div className={styles.modalActions}>
              <button className={styles.deleteButton} onClick={handleConfirmDelete}>
                Xóa
              </button>
              <button className={styles.cancelButton} onClick={() => setDeletingUser(null)}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
