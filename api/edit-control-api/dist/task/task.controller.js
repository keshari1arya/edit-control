"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task_entity_1 = require("../entities/task.entity");
const task_service_1 = require("./task.service");
const submission_entity_1 = require("../entities/submission.entity");
let TaskController = exports.TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    createTask(taskData) {
        return this.taskService.createTask(taskData);
    }
    updateTask(taskId, taskData) {
        return this.taskService.updateTask(taskId, taskData);
    }
    deleteTask(taskId) {
        return this.taskService.deleteTask(taskId);
    }
    getTaskById(taskId) {
        return this.taskService.getTaskById(taskId);
    }
    getAllTasks() {
        return this.taskService.getAllTasks();
    }
    createSubmission(taskId, submission) {
        return this.taskService.createSubmission(taskId, submission);
    }
    commentSubmission(taskId, submissionId, comment) {
        return this.taskService.commentSubmission(taskId, submissionId, comment);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a task' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Task created successfully',
        type: task_entity_1.Task,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a task by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Task updated successfully',
        type: task_entity_1.Task,
    }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a task by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task deleted successfully' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "deleteTask", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a task by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task found', type: task_entity_1.Task }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all tasks' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of tasks', type: [task_entity_1.Task] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a submission' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Submission created successfully',
        type: submission_entity_1.Submission,
    }),
    (0, common_1.Post)(':taskId/submissions'),
    __param(0, (0, common_1.Param)('taskId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, submission_entity_1.Submission]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "createSubmission", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Comment on a submission' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Submission commented successfully',
        type: submission_entity_1.Submission,
    }),
    (0, common_1.Put)(':taskId/submissions/:submissionId/comment'),
    __param(0, (0, common_1.Param)('taskId')),
    __param(1, (0, common_1.Param)('submissionId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "commentSubmission", null);
exports.TaskController = TaskController = __decorate([
    (0, swagger_1.ApiTags)('tasks'),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map