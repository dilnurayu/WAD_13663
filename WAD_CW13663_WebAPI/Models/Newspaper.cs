using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WAD_CW13663.Models
{
    public class Newspaper
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Issue Number is required")]
        public int IssueNo { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }


        public int? PublisherId { get; set; }

        [ForeignKey("PublisherId")]
        public Publisher? Publisher { get; set; }
    }
}
