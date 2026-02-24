/**
 * คลาสแทนข้อมูลรายการรายรับ-รายจ่าย
 * @class
 */
class Expense {
  /**
   * สร้างออบเจกต์รายการรายรับ-รายจ่าย
   * @constructor
   * @param {string} date - วันที่ทำรายการ (รูปแบบ YYYY-MM-DD)
   * @param {number|string} income - จำนวนเงินรายรับ
   * @param {number|string} expense - จำนวนเงินรายจ่าย
   * @param {string} [detail=''] - รายละเอียดรายการ
   */
  constructor(date, income, expense, detail = '') {
    /**
     * วันที่ทำรายการ
     * @type {string}
     */
    this.date = date;

    /**
     * จำนวนเงินรายรับ
     * @type {number}
     */
    this.income = parseFloat(income) || 0;

    /**
     * จำนวนเงินรายจ่าย
     * @type {number}
     */
    this.expense = parseFloat(expense) || 0;

    /**
     * รายละเอียดรายการ
     * @type {string}
     */
    this.detail = detail;
  }
}

/**
 * คลาสสำหรับจัดการรายการรายรับ-รายจ่ายทั้งหมด
 * @class
 */
class ExpenseModel {
  /**
   * สร้างออบเจกต์สำหรับเก็บรายการทั้งหมด
   * @constructor
   */
  constructor() {
    /**
     * อาเรย์เก็บรายการทั้งหมด
     * @type {Expense[]}
     */
    this.expenses = [];
  }

  /**
   * เพิ่มรายการใหม่เข้าไปในระบบ
   * @param {Expense} expense - ออบเจกต์ของคลาส Expense
   * @returns {void}
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * ดึงข้อมูลรายการทั้งหมด
   * @returns {Expense[]} อาเรย์เก็บรายการทั้งหมด
   */
  getAll() {
    return this.expenses;
  }

  /**
   * คำนวณยอดรวมรายรับทั้งหมด
   * @returns {number} ยอดรวมรายรับ
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * คำนวณยอดรวมรายจ่ายทั้งหมด
   * @returns {number} ยอดรวมรายจ่าย
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * คำนวณยอดเงินคงเหลือ (รายรับลบรายจ่าย)
   * @returns {number} ยอดเงินคงเหลือ
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };