function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const produceTotal = cart.reduce((sum, item) => sum + item.qty * item.pricePerKg, 0);
  const logisticsFee = Math.round(produceTotal * 0.07);
  const escrowFee = Math.round(produceTotal * 0.02);
  const grandTotal = produceTotal + logisticsFee + escrowFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛒</span>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  Buyer Shopping Cart
                </h3>
                <p className="text-[11px] text-slate-500">
                  {cart.length} Farmgate Produce Items
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer border border-slate-200 transition"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cart.length === 0 ? (
              <div className="py-16 text-center text-slate-400 space-y-2">
                <div className="text-4xl">🌾</div>
                <p className="font-bold text-slate-600 text-sm">Your Cart is Empty</p>
                <p className="text-xs">Browse the Buyer Store and add fresh farmgate produce to cart.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs"
                >
                  <div className="flex gap-3 items-center">
                    <img src={item.image} alt={item.crop} className="w-12 h-12 rounded-xl object-cover border border-slate-200 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 truncate">{item.crop}</h4>
                      <p className="text-[11px] text-slate-500 truncate">{item.farmer} ({item.location})</p>
                      <span className="font-extrabold text-emerald-800">₹{item.pricePerKg} / kg</span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-rose-500 hover:text-rose-700 font-bold p-1 cursor-pointer"
                      title="Remove"
                    >
                      🗑️
                    </button>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200/60">
                    <span className="text-slate-500 font-medium">Quantity (kg):</span>
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-2 py-0.5">
                      <button
                        onClick={() => onUpdateQty(item.id, Math.max(10, item.qty - 10))}
                        className="text-slate-600 hover:text-slate-900 font-bold px-1"
                      >
                        -
                      </button>
                      <span className="font-bold text-slate-900 w-12 text-center">{item.qty} kg</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 10)}
                        className="text-slate-600 hover:text-slate-900 font-bold px-1"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-slate-900">
                      ₹{(item.qty * item.pricePerKg).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Produce Subtotal:</span>
                  <span className="font-bold text-slate-900">₹{produceTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-teal-700">
                  <span>Reefer Cold Transit Logistics (7%):</span>
                  <span>₹{logisticsFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Smart Escrow Guarantee (2%):</span>
                  <span>₹{escrowFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between font-extrabold text-sm text-emerald-950">
                  <span>Total Escrow Amount:</span>
                  <span className="text-base text-emerald-800">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onCheckout(grandTotal);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔒</span>
                <span>Execute Smart Escrow Checkout (₹{grandTotal.toLocaleString('en-IN')})</span>
              </button>

              <p className="text-[10px] text-center text-slate-400">
                🛡️ 100% Escrow Protection • Reefer Van Dispatch with Google OR-Tools
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

window.CartDrawer = CartDrawer;
