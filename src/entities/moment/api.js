import instance from "../../shared/api";
import FormData from "form-data";

export const createMoment = async (momentData) => {
  const formData = new FormData();

  formData.append("author", momentData.author);
  formData.append("description", momentData.description);
  formData.append("image", momentData.image);
  console.log(formData);

  const response = await instance.post("/api/moments/create/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getStatisticMoment = async (moment_id, user_id) => {
  console.log(moment_id);
  console.log(user_id);
  const response = await instance.get(
    `/api/moments/statistic/${moment_id}/${user_id}/`
  );
  return response;
};

export const likeMoment = async (user_id, moment_id) => {
  const response = await instance.post(`/api/likes/create/`, {
    author: user_id,
    moment: moment_id,
    comment: null,
  });
  return response;
};

export const likeComment = async (user_id, comment_id) => {
  const response = await instance.post(`/api/likes/create/`, {
    author: user_id,
    moment: null,
    comment: comment_id,
  });
  return response;
};

export const createComment = async (comment) => {
  console.log(comment);
  const response = await instance.post("/api/comments/create/", comment);
  return response;
};

export const deleteLike = async (idAuthor, idMoment, idComment) => {
  let url;
  let data;

  if (idMoment) {
    // Удаление лайка с момента
    console.log("moment");
    url = `/api/like/delete/moment/${idAuthor}/${idMoment}/`;
    data = { type: "moment" };
  } else if (idComment) {
    // Удаление лайка с комментария
    console.log("comment");
    url = `/api/like/delete/comment/${idAuthor}/${idComment}/`;
    data = { type: "comment" };
  } else {
    // Обработка ошибки или другой логики, если не указан idMoment или idComment
    console.error("idMoment or idComment not provided");
    return null;
  }

  const response = await instance.delete(url, { data });
  return response.data;
};

export const addTag = async (tag) => {
  const response = await instance.post("/api/tags/create/", tag);
  return response;
}