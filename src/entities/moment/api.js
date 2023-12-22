import instance from "../../shared/api";

export const createMoment = async (moment) => {
  console.log(moment);
  const response = await instance.post("/api/moments/create", moment);
  return response;
};

export const getStatisticMoment = async (id) => {
  console.log(id);
  const response = await instance.get(`/api/moments/statistic/${id}/`);
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

export const deleteLike = async (idAuthor, idMoment, idComment) => {
  let url;
  let data;

  if (idMoment) {
    // Удаление лайка с момента
    url = `/api/like/delete/moment/${idAuthor}/${idMoment}/`;
    data = { type: "moment" };
  } else if (idComment) {
    // Удаление лайка с комментария
    url = `/api/likes/delete/${idAuthor}/${idComment}/`;
    data = { type: "comment" };
  } else {
    // Обработка ошибки или другой логики, если не указан idMoment или idComment
    console.error("idMoment or idComment not provided");
    return null;
  }

  const response = await instance.delete(url, { data });
  return response.data;
};
