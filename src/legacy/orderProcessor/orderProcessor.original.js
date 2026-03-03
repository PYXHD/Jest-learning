async function processOrder(order, user) {
    if (!order || !user) {
        throw new Error("Invalid data");
    }

    console.log("Processing order...");

    const response = await fetch(`https://api.shipping.com/calculate`, {
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

    const baseTotal = order.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const discount = user.isPremium ? baseTotal * 0.1 : 0;

    const today = new Date().getDay();
    const weekendFee = today === 0 || today === 6 ? 5 : 0;

    return {
        total: baseTotal - discount + shippingData.cost + weekendFee,
        shipping: shippingData.cost,
        discount,
    };
}

export {
    processOrder
}