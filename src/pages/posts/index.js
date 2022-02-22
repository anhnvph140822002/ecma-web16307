import axios from "axios";
import { getAll, remove } from "../../api/posts";
import { reRender } from "../../utils";

const AdminPosts = {
    async render() {
        const response = await getAll();
        return `
            <div class="max-w-5xl mx-auto">

                <div class="news">
                <th><a href="/admin/posts/add">Thêm sp</a></th>
                    <table>
                        <thead>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tiêu đề</th>
                            <th>Giá</th>
                            <th>Số luọng</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            ${response.data.map((post, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>
                                        <img src="${post.img}" alt="" width="50"/>
                                    </td>
                                    <td>
                                        <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                                    </td>
                                    <td>
                                        <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.price}</a></h3>
                                    </td>
                                    <td>
                                        <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.soluong}</a></h3>
                                    </td>
                                    <td>
                                        <a href="/admin/posts/${post.id}/edit">Edit</a>
                                        <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                                        
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },
    afterRender() {
        // Lấy danh sách button
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp và lấy ra từng button
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            // Viết sự kiện khi click vào button call api và xóa sản phẩm
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id)
                        .then(() => alert("Đã xóa thành công"))
                        .then(() => reRender(AdminPosts, "#app"));
                }
            });
        });
    },
};
export default AdminPosts;