/**
 *  __          __  _    _____ _____  ______    _____ _        _             _                
 *  \ \        / / | |  |_   _|  __ \|  ____|  / ____| |      | |           | |               
 *   \ \  /\  / /__| |__  | | | |  | | |__    | (___ | |_ __ _| |_ _   _ ___| |__   __ _ _ __ 
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|    \___ \| __/ _` | __| | | / __| '_ \ / _` | '__|
 *     \  /\  /  __/ |_) || |_| |__| | |____ _ ____) | || (_| | |_| |_| \__ \ |_) | (_| | |   
 *      \/  \/ \___|_.__/_____|_____/|______(_)_____/ \__\__,_|\__|\__,_|___/_.__/ \__,_|_|                                                                                                
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

module.exports = {        
    /**
     * Function to generate template
     * 
     * @param object _this
     * @return string
     */
    getTemplate: function(i18n, template){
        return new template(__dirname + "/template.ejs").seti18n(i18n).render();
    }
};