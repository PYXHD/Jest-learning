function calculateBaseTotal(items) {
    return items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0)
}

function calculateDiscount(baseTotal, isPremium) {
    return isPremium ? baseTotal * 0.1 : 0
}

function calculateWeekendFee(date = new Date()) {
    const day = date.getDay();
    return day === 0 || day === 6 ? 5 : 0
}

async function fetchShippingCost(order, user) {
    const response = await fetch("https://api.shipping.com/calculate", {
        method: "POST",
        body: JSON.stringify({
            items: order.items,
            country: user.country,
        }),
    });

    const shippingData = await response.json();

    if (!shippingData || !shippingData.cost) {
        throw new Error("Shipping calculation failed");
    }

    return shippingData.cost;
}

async function processOrder(order, user) {
    if (!order || !user) {
        throw new Error("Invalid data");
    }

    const shippingCost = await fetchShippingCost(order, user);
    const baseTotal = calculateBaseTotal(order.items);
    const discount = calculateDiscount(baseTotal, user.isPremium);
    const weekendFee = calculateWeekendFee();

    return {
        total: baseTotal - discount + shippingCost + weekendFee,
        shipping: shippingCost,
        discount,
    };
}

export {
    processOrder
}