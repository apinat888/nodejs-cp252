class Expense {
  /**
   Represents a Expense. 
   @constructor
   @param {date} date - . วัน
   @param {float} income - รายได้
   @param {float} expense - ค่าใช้จ่าย
   @param {string} detail - รายละเอียด
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class 
 */
class ExpenseModel {
   /**
    * @constructor
    */
  constructor() {
    this.expenses = [];
  }

 /**
   * Add an expense object to the list
   * @param {Expense} expense - Expense object to add
   */
  add(expense) {
    this.expenses.push(expense);
  }
 /**
   * Get all expense records
   * @returns {Array<Expense>} Array of expense objects
   */

  getAll() {
    return this.expenses;
  }
/**
   * Calculate total income
   * @returns {number} Total income amount
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate total expense
   * @returns {number} Total expense amount
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate remaining money
   * @returns {number} Money left after expense
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
