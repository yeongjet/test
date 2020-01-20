"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let Person = class Person extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    tslib_1.__metadata("design:type", Number)
], Person.prototype, "id", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSONB),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "name", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Comment('分类设置'),
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSONB),
    tslib_1.__metadata("design:type", Number)
], Person.prototype, "age", void 0);
Person = tslib_1.__decorate([
    sequelize_typescript_1.Table
], Person);
exports.Person = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3BlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFTZ0M7QUFHOUIsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTyxTQUFRLDRCQUFhO0NBZXhDLENBQUE7QUFWQztJQUhDLGlDQUFVO0lBQ1Ysb0NBQWE7SUFDYiw2QkFBTSxDQUFDLCtCQUFRLENBQUMsT0FBTyxDQUFDOztrQ0FDZDtBQUlYO0lBRkMsZ0NBQVMsQ0FBQyxLQUFLLENBQUM7SUFDaEIsNkJBQU0sQ0FBQywrQkFBUSxDQUFDLEtBQUssQ0FBQzs7b0NBQ1g7QUFLWjtJQUhDLDhCQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2YsZ0NBQVMsQ0FBQyxLQUFLLENBQUM7SUFDaEIsNkJBQU0sQ0FBQywrQkFBUSxDQUFDLEtBQUssQ0FBQzs7bUNBQ1o7QUFkQSxNQUFNO0lBRGxCLDRCQUFLO0dBQ08sTUFBTSxDQWVsQjtBQWZZLHdCQUFNIn0=