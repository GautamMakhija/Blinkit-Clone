export const renderfinalBillContainer = (selectedItem) => {
  return (
    <div className="leftSectionOfFinalBill">
      <div>
        {selectedItem.count} items • ₹{selectedItem.amount}
        <span className="finalOldAmountOfSelectedItems">
          ₹{selectedItem.oldAmount}
        </span>
      </div>
      <div className="proceedForPayment">Proceed {">"} </div>
    </div>
  );
};
