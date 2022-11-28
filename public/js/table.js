
fetch('http://localhost:5000/api/users/')
    .then(res => {
        return res.json()
    })
    .then(data => {
        let ranks = data.map(el => el.rank)
        data.forEach(user => {
            const markup = `<tr>
                                <td class="col-id">
                                    <span>${user.id}<span/>
                                </td> 
                                <td class="col-username">
                                    <input 
                                        type="text" 
                                        value="${user.username}" 
                                        id="username_${user.id}" 
                                        onchange="onChangeUsername(${user.id})" 
                                        class="input-username"
                                    />
                                </td> 
                                <td class="col-rank">
                                    <select 
                                        name="rank" 
                                        id="rank_${user.id}" 
                                        onchange="onChangeRank(${user.id})" 
                                        class="select-rank">
                                    </select>
                                </td> 
                                <td class="col-delete">
                                    <button 
                                        id="delete_${user.id}" 
                                        onclick="onClickDelete(${user.id})" 
                                        class="delete-button">Delete
                                    </button>
                                </td>
                            </tr>`
            document.getElementById('table-body').insertAdjacentHTML('beforeend', markup)
            var opts = [...new Set(ranks)].map(rank => 
                `<option value="${rank}" ${rank === user.rank ? "selected=true" : ""}>${rank}</option>`
            ).join('')
            var rankSel = document.getElementById(`rank_${user.id}`)
            rankSel.innerHTML = opts
        });
    })
    .catch(error => console.log(error))     
