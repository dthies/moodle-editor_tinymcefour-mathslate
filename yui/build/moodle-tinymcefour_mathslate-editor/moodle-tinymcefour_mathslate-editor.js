YUI.add('moodle-tinymcefour_mathslate-editor', function (Y, NAME) {

//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor mathslate plugin.
 *
 * @package    tinymcefour_mathslate
 * @copyright  2013 Daniel Thies  <dthies@ccal.edu>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

M.tinymcefour_mathslate = M.tinymcefour_mathslate|| {};
 /**
 * Get plugin location
 *
 * @method init
 * @param {Object} params
 */

M.tinymcefour_mathslate.init = function(params) {
        M.tinymcefour_mathslate.url=params.url;
    };

/* Constructor function for an editor of a page.
 * @method initEditor
 * @param string editorID
 * @param string config
 */
M.tinymcefour_mathslate.initEditor=function(params){
function Editor(editorID,config){
        var me=new M.local_mathslate.Editor('#'+editorID,config);
        var popup = top.tinymce.activeEditor.windowManager.getParams();
        popup.getMath=function (format) {return mje.output(format);};
        popup.undo=function () {me.undo();};
        popup.redo=function () {me.redo();};
    }
new Editor(params.elementid,params.config);
};


}, '@VERSION@', {
    "requires": [
        "dd-drag",
        "dd-proxy",
        "dd-drop",
        "event",
        "tabview",
        "io-base",
        "json",
        "moodle-local_mathslate-editor"
    ]
});
