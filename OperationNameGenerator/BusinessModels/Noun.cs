using System;
using System.ComponentModel.DataAnnotations;

namespace OperationNameGenerator.BusinessModels
{
    public class Noun
    {
        public Guid Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Value { get; set; }

        public Noun()
        {
            Id = Guid.NewGuid();
        }
    }
}
