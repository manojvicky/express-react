var obj = React.createElement(ThumbnailList, {});
ReactDOM.render(obj, document.getElementById('mount-point'));
var Badge = React.createClass({
    displayName: 'Badge',

    getInitialState: function () {
        console.log('Set Initial State');
        return { count: 0 };
    },

    incrementCount: function () {
        console.log('click event captured..');
        var newcount = this.state.count + 2;
        this.setState({ count: newcount });
    },

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { className: 'btn btn-primary', type: 'button', onClick: this.incrementCount },
                this.props.caption,
                ' ',
                React.createElement(
                    'span',
                    { className: 'badge' },
                    this.state.count
                )
            )
        );
    }
});
var Thumbnail = React.createClass({
  displayName: "Thumbnail",


  render: function () {
    return React.createElement(
      "div",
      { className: "col-sm-6 col-md-4" },
      React.createElement(
        "div",
        { className: "thumbnail" },
        React.createElement("img", { src: "http://via.placeholder.com/192x200", alt: "..." }),
        React.createElement(
          "div",
          { className: "caption" },
          React.createElement(
            "h3",
            null,
            this.props.title
          ),
          React.createElement(
            "p",
            null,
            "Some summary"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(Badge, { caption: "Votes" })
          )
        )
      )
    );
  }
});
var ThumbnailList = React.createClass({
    displayName: 'ThumbnailList',


    render: function () {
        var courses = ['React', 'Angular', 'JS'];
        var list = courses.map(function (value, index) {
            console.log(value);
            return React.createElement(Thumbnail, { title: value });
        });
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'row' },
                list
            )
        );
    }
});