var InfoContentBuilder = function InfoContentBuilder (place) {
  this._place = place;
  this._content = '';
};

InfoContentBuilder.prototype.content = function content () {
  return this._content;
};

InfoContentBuilder.prototype.addOuterContainer = function addOuterContainer () {
  this._content = "<div class = 'info-window'>" +
                    this._content +
                  "</div>"
};

InfoContentBuilder.prototype.addName = function addName () {
  this._content = this._content +
        "<div class = 'name'>" +
          "<a href='" + this._place.url +"' target='_blank'>" + this._place.name + "</a>" +
        "</div>"
};

InfoContentBuilder.prototype.addAddress = function addAddress () {
  if (this._place.formatted_address) {
    this._content = this._content +
        "<div class = 'address'>" + this._place.formatted_address + "</div>"
  }
};

InfoContentBuilder.prototype.addPhone = function addPhone () {
  var phone = this._place.formatted_phone_number;

  if (phone) {
    this._content = this._content +
        "<div class = 'phone'>" + this._place.formatted_phone_number + "</div>"
  } else {
    this._content = this._content +
        "<div class = 'phone'> Unlisted Phone Number</div>"
  }
};

InfoContentBuilder.prototype.addWebsite = function addWebsite () {
  if (this._place.website) {
    this._content = this._content +
        "<div class = 'website'>" +
          "<a href='" + this._place.website +"' target='_blank'>" + this._place.website + "</a>" +
        "</div>"
  }
};

InfoContentBuilder.prototype.addRating = function addRating () {
  var rating = this._place.rating;

  if (rating) {
    this._content = this._content +
        "<div class = 'rating'>" + rating + "/5</div>"
  } else {
    this._content = this._content +
        "<div class = 'rating'> No Rating </div>"
  }
};

module.exports = InfoContentBuilder;
