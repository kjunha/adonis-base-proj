"use strict";

class NoticeController {
  list({ request, params, response }) {
    response.json({
      id: params.id,
      message: request.message,
    });
  }
}

module.exports = NoticeController;
