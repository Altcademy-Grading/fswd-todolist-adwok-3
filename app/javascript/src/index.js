import $ from 'jquery';

import {
  getAndDisplayAllTasks,
  createTask,
  deleteTask,
  markTaskComplete,
  markTaskActive,
  //indexTasks,
  //postTask,
} from "./requests.js";

//indexTasks(function (response) {
  //var htmlString = response.tasks.map(function(task) {
    //return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      //" + task.content + "\
      //</div>";
  //});

  //$("#tasks").html(htmlString);
//});