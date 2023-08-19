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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const submission_entity_1 = require("./submission.entity");
const taskvideo_entity_1 = require("./taskvideo.entity");
const swagger_1 = require("@nestjs/swagger");
let Task = exports.Task = class Task {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    (0, swagger_1.ApiProperty)({ description: 'The unique identifier of the task' }),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'The name of the task' }),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'The turnaround time for the task' }),
    __metadata("design:type", Date)
], Task.prototype, "turnAroundTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'The go-live date for the task' }),
    __metadata("design:type", Date)
], Task.prototype, "goLiveDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'The title of the video associated with the task',
    }),
    __metadata("design:type", String)
], Task.prototype, "videoTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        description: 'The description of the video associated with the task',
    }),
    __metadata("design:type", String)
], Task.prototype, "videoDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: 'Tags associated with the video' }),
    __metadata("design:type", String)
], Task.prototype, "videoTags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => taskvideo_entity_1.TaskVideo, (taskVideo) => taskVideo.task),
    __metadata("design:type", Array)
], Task.prototype, "taskVideos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => submission_entity_1.Submission, (submission) => submission.task),
    __metadata("design:type", Array)
], Task.prototype, "submissions", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
//# sourceMappingURL=task.entity.js.map