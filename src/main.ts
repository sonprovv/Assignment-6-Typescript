import './style.css';
import { createUser } from './user';
import type { User } from './user';

const app = document.getElementById('app') as HTMLDivElement;
app.innerHTML = `
  <form id="userForm">
    <input name="username" id="username" placeholder="Username" required />
    <input name="email" id="email" placeholder="Email" required />
    <input name="password" id="password" type="password" placeholder="Password" required />
    <select name="role" id="role">
      <option value="user">User</option>
      <option value="admin">Admin</option>
      <option value="guest">Guest</option>
    </select>
    <button type="submit">Create User</button>
  </form>
  <div id="userInfo"></div>
`;

const form = document.getElementById("userForm") as HTMLFormElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const userListDiv = document.getElementById("userInfo") as HTMLDivElement;

const users: User[] = [];

function renderUserList() {
  userListDiv.innerHTML = '<h3>Danh sách User đã tạo:</h3>' +
    '<ul>' +
    users.map(u => `<li>${u.username} (${u.email}) - ${u.role}</li>`).join('') +
    '</ul>';
}

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newUser: Partial<User> = {
    username: (form.elements.namedItem("username") as HTMLInputElement).value,
    email: emailInput.value,
    role: (form.elements.namedItem("role") as HTMLSelectElement).value as 'admin' | 'user' | 'guest'
  };
  const user = createUser(newUser);
  users.push(user);
  console.log(user);
  renderUserList();
};
