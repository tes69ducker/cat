// index.js
document.addEventListener("DOMContentLoaded", function () {
  const commentList = document.getElementById("comment-list");
  const commentInput = document.getElementById("comment-input");
  const commentButton = document.getElementById("comment-button");

  // Mảng để lưu trữ các bình luận
  const comments = [];

  // Hàm để thêm bình luận vào danh sách và cập nhật giao diện
  function addComment(commentText) {
    const listItem = document.createElement("li");
    listItem.textContent = commentText;
    commentList.appendChild(listItem);
  }

  // Xử lý sự kiện khi nút Bình luận được nhấn
  commentButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      comments.push(commentText); // Thêm bình luận vào mảng
      addComment(commentText); // Cập nhật giao diện
      commentInput.value = ""; // Xóa nội dung trong hộp nhập
    }
  });

  // Xử lý sự kiện khi nhấn Enter trong hộp nhập
  commentInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const commentText = commentInput.value.trim();
      if (commentText !== "") {
        comments.push(commentText); // Thêm bình luận vào mảng
        addComment(commentText); // Cập nhật giao diện
        commentInput.value = ""; // Xóa nội dung trong hộp nhập
      }
    }
  });
});
