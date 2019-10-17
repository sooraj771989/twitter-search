import React, { Component } from 'react'; 

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: null,
            searchtext: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    submitForm = () => {
        this.props.history.push('/key=' + this.state.searchtext);
    }

    componentDidMount() {
        this.getData();
        setInterval(this.getData, 30000);  
    }

    getData = () => {
    const { id } = this.props.match.params;
    console.log(id);
    if (id === '') {
    fetch(`https://aravindtwitter.herokuapp.com/twittersearch?key=adobe`)

        .then((response) => response.json())
        .then((response) => {
            console.log(response.statuses);
            this.setState({ show: response.statuses });
            
        })
    }
    else {
    fetch(`https://aravindtwitter.herokuapp.com/twittersearch?key=${id}`)

        .then((response) => response.json())
        .then((response) => {
            console.log(response.statuses);
            this.setState({ show: response.statuses })
            
        })
    }
    }

    handleChange(event) {
        this.setState({ searchtext: event.target.value, searchtexterrorText: "", emailerrorstatus: false });
    }

    render() {
        const { show } = this.state;
        return (
            <div>

                    <div className="row">
                    <div className="col-md-6 text-left text-primary">Search@twitter</div>
                    <div className="col-md-6 text-right text-primary">Autorefresh</div>
                    </div>

                            <form onSubmit={this.submitForm} className="mr-2 form-div col-md-10">
                           
                            <div className='input-group'>
                                 <input className="form-control"
                                type="text"
                                value={this.state.searchtext}
                                onChange={this.handleChange}
                                placeholder='Search text'
                            />
                            <input className='btn btn-primary' type="submit" value="SEARCH" />
                            </div>
                        </form>

                    {show === null
                    &&
                    <p>Loading...</p>}
                    {
                    show !== null
                    &&
                    <div>
                        {show.map((post, index) => {
                            return (
                                <div className='row blog-post ' key={index}>
                                    <div className='float-left col-md-2 image-container'>
                                        <img src={post.user.profile_image_url_https} alt={post.user.profile_image_url_https} />
                                    </div>
                                    <div className='text-left float-left col-md-10'>
                                        <span>{post.user.user_name}</span>
                                        <span>{post.created_at}</span>
                                        <p><b>{post.text}</b></p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default Search;