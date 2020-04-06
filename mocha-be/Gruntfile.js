module.exports = function(grunt) {
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: "test"
            }
        },
        istanbul_check_coverage: {
            default: {
                options: {
                    coverageFolder: "coverage",
                    check: {
                        lines: 90,
                        statements: 90
                    }
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-mocha-cli");
    grunt.loadNpmTasks("grunt-mocha-istanbul");

    grunt.registerTask("cover", ["mocha_istanbul"]);
    grunt.registerTask("check-cover", ["istanbul_check_coverage"])
}