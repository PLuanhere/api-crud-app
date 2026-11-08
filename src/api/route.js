export async function GET(page, limit, sortBy, order, searchTerm) {
    const params = new URLSearchParams({
        page: page,
        limit: limit,
        sortBy: sortBy,
        order: order
    });

    if(searchTerm) {
        params.append("search", searchTerm);
    }

    const res = await fetch(`https://671891927fc4c5ff8f49fcac.mockapi.io/v2?${params}`)
    
    if(!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
}
