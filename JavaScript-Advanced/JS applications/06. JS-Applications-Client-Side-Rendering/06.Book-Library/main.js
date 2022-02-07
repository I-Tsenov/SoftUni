import { html } from "../node_modules/lit-html/lit-html.js";

const rowTemplate = book => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td data-id=${book._id}>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    </td>
</tr>`;

const tableTemplate = ctx => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody @click=${ev=> onBtnClick(ev, ctx)}>
        ${ctx.list.map(b => rowTemplate(b))}
    </tbody>
</table>`;

const createFormTemplate = () => html`
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

const editFormTemplate = book => html`
<form id="edit-form">
    <input type="hidden" name="_id" .value=${book._id}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value="Save">
</form>`;

// ctx се явява dependency injection
const layoutTemplate = (ctx, bookToEdit) => html`
<button @click=${ctx.load} id="loadBooks">LOAD ALL BOOKS</button>
${tableTemplate(ctx)}
${bookToEdit ? editFormTemplate(bookToEdit) : createFormTemplate()}`;

function onBtnClick(ev, ctx) {
    if (ev.target.classList.contains('editBtn')) {
        const id = ev.target.parentNode.dataset.id;
        ctx.onEdit(id);
    } else if (ev.target.classList.contains('deleteBtn')) {
        const id = ev.target.parentNode.dataset.id;
        ctx.onDelete(id);
    }
}

export {
    layoutTemplate
};