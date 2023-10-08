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
exports.TaskService = void 0;
const task_entity_1 = require("../entities/task.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const submission_entity_1 = require("../entities/submission.entity");
const taskvideo_entity_1 = require("../entities/taskvideo.entity");
const video_entity_1 = require("../entities/video.entity");
let TaskService = exports.TaskService = class TaskService {
    constructor(taskRepository, submissionRepository, taskVideoRepository, videoRepository) {
        this.taskRepository = taskRepository;
        this.submissionRepository = submissionRepository;
        this.taskVideoRepository = taskVideoRepository;
        this.videoRepository = videoRepository;
    }
    async createTask(taskData) {
        const task = this.taskRepository.create(taskData);
        await this.taskRepository.save(task);
        return task;
    }
    async updateTask(taskId, taskData) {
        await this.taskRepository.update(taskId, taskData);
        const updatedTask = await this.taskRepository.findOne({
            where: { id: taskId },
        });
        await this.taskRepository.save(updatedTask);
        return updatedTask;
    }
    async deleteTask(taskId) {
        const task = await this.taskRepository.findOne({
            where: { id: taskId },
        });
        await this.taskRepository.remove(task);
    }
    async getTaskById(taskId) {
        const task = await this.taskRepository.findOne({
            where: { id: taskId },
            relations: {
                submissions: {
                    video: true,
                }
            }
        });
        return task;
    }
    async getAllTasks() {
        return this.taskRepository.find();
    }
    async getAllSubmissions(taskId) {
        return await this.submissionRepository.find({
            where: {
                task: {
                    id: taskId,
                },
            },
        });
    }
    async createSubmission(taskId, submission) {
        await this.submissionRepository.create(submission);
        await this.submissionRepository.save(submission);
        return submission;
    }
    async commentSubmission(taskId, submissionId, comment) {
        const submission = await this.submissionRepository.findOneOrFail({
            where: { id: submissionId },
        });
        submission.comment = comment;
        await this.submissionRepository.update(submissionId, submission);
        await this.submissionRepository.save(submission);
        return submission;
    }
    async attachVideo(taskId, url) {
        const task = await this.getTaskById(taskId);
        const taskvideo = new taskvideo_entity_1.TaskVideo();
        taskvideo.task = task;
        taskvideo.video = this.videoRepository.create({ url: url });
        const vid = await this.videoRepository.save(taskvideo.video);
        taskvideo.video = vid;
        const v = this.taskVideoRepository.create(taskvideo);
        await this.taskVideoRepository.save(v);
    }
};
exports.TaskService = TaskService = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_2.InjectRepository)(submission_entity_1.Submission)),
    __param(2, (0, typeorm_2.InjectRepository)(taskvideo_entity_1.TaskVideo)),
    __param(3, (0, typeorm_2.InjectRepository)(video_entity_1.Video)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], TaskService);
//# sourceMappingURL=task.service.js.map