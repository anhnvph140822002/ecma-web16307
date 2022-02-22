import axios from "axios";

const NewList = {
    async render() {
        const response = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts");
        return /* html */`
        <h2 class="font-semibold text-2xl uppercase my-4">Quản lý bài viết</h2>            
        <div class="grid grid-cols-3 gap-8">
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                ${response.data.map((post, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>
                            <img src="${post.img}" alt="" width="50" />
                        </td>
                        <td class="my-3">
                            <a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                `).join("")}
                </tbody>
            </table>


           
        </div>
        `;
    },
};
export default NewList;