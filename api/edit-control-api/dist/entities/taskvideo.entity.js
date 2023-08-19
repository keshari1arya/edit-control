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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskVideo = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const video_entity_1 = require("./video.entity");
let TaskVideo = exports.TaskVideo = class TaskVideo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TaskVideo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, (task) => task.taskVideos),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", task_entity_1.Task)
], TaskVideo.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => video_entity_1.Video, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", video_entity_1.Video)
], TaskVideo.prototype, "video", void 0);
exports.TaskVideo = TaskVideo = __decorate([
    (0, typeorm_1.Entity)()
], TaskVideo);
//# sourceMappingURL=taskvideo.entity.js.map