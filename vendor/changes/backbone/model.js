define([
	'backbone',
	'generalChanges'
], function(Backbone, generalChanges) {
	_.extend(Backbone.Model.prototype, {
		unset: function(attr, options) {
			if (typeof attr === "string") {
				return this.set(attr, void 0, _.extend({}, options, {
					unset: true
				}));
			} else if (Array.isArray(attr)) {
				// console.log('ARRAY ----- ');
				for (var i = attr.length - 1; i >= 0; i--) {
					this.set(attr[i], void 0, _.extend({}, options, {
						unset: true
					}));
				};

				return this;
			}
		},

		changeSilently: function() {
			var options = {},
				changing = this._changing;
			this._changing = true;

			// console.log(this._silent);
			for (var attr in this._silent) {
				this._pending[attr] = true;
			}
			this._silent = {};
			if (changing) {
				return this;
			}

			while (!_.isEmpty(this._pending)) {
				this._pending = {};
				for (var attr in this.changed) {
					if (this._pending[attr] || this._silent[attr]) continue;
					delete this.changed[attr];
				}
				this._previousAttributes = _.clone(this.attributes);
			}
			this._changing = false;
			return this;
		}
	}, generalChanges);

});